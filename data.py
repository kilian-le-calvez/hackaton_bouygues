from fileinput import filename
import random
import requests
import time
import matplotlib.pyplot as plt

def gigasToMo(gigas):
    return gigas * 1000

def generateMaxDatas():
    minGigas = 5
    maxGigas = 21
    return random.uniform(gigasToMo(minGigas), gigasToMo(maxGigas))

def generateFluxData1Sec(min, max):
    minMos = min
    maxMos = max
    return random.uniform(minMos, maxMos)

apiPostDataUrl = "http://127.0.0.1:8000/api/fluxData/"

def calcAverage(arr):
    total = float(0)
    for elem in arr:
        total += float(elem)
    res = float(total) / float(len(arr))
    return res

fileImgName = "data_conso.png"

def getImage(sec, min):
    if len(sec) < 1:
        return []
    figure, axis = plt.subplots(1, 2)

    axis[0].set_ylim([0, 20])
    axis[0].set_xlabel('Seconds')
    axis[0].set_ylabel('Debits mb/s')
    axis[0].plot(sec)
    axis[0].set_title("Consumption by Seconds")

    axis[1].set_ylim([0, 20])
    axis[1].set_xlabel('Minutes')
    axis[1].set_ylabel('Debits mb/min')
    axis[1].plot(min)
    axis[1].set_title("Consumption by Minutes")

    plt.savefig(fileImgName)
    return fileImgName

apiGeneratePhoto = "http://127.0.0.1:8000/api/images/"

def analyzeDatas():
    lastSecond = 0
    seconds = []
    average = 0.0
    maxDatas = generateMaxDatas()
    dataAlreadyUsed = generateMaxDatas()
    while 1:
        response = requests.get(apiPostDataUrl)
        arrSec = response.json()["seconds"]
        arrMin = response.json()["minutes"]
        minMos = response.json()["minMos"]
        maxMos = response.json()["maxMos"]
        average = calcAverage(arrSec)
        flux = generateFluxData1Sec(minMos, maxMos)
        response = requests.post(apiPostDataUrl, data = {"data": flux, "average": average})
        imageUrl = getImage(arrSec, arrMin)
        files = {'media': open(imageUrl, 'rb')}
        requests.post(apiGeneratePhoto, files = files)
        time.sleep(1)

analyzeDatas()