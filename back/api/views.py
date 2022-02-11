from rest_framework.views import APIView
from api.models import *
from rest_framework.response import Response

# Create your views here.
class images(APIView):
    def get(self, request):
        while len(Images.objects.all()) > 3:
            Images.objects.all().first().delete()
        image = Images.objects.all().last()
        return Response({"url": image.data.url})
    def post(self, request):
        image = request.FILES['media']
        print(image)
        Images.objects.create(data=image)
        return Response("OK")

class fluxData(APIView):
    def post(self, request):
        if len(Seconds.objects.all()) > 60:
            Minutes.objects.create(data=request.data["average"])
            Seconds.objects.all().delete()
        Seconds.objects.create(data=request.data["data"])
        return Response("OK")

    def get(self, request):
        seconds = Seconds.objects.all()
        list = []
        for second in seconds:
            list.append(second.data)
        minutes = Minutes.objects.all()
        listMin = []
        for min in minutes:
            listMin.append(min.data)
        params = Params.objects.all().first()
        return Response({"seconds": list, "minutes": listMin, "minMos": params.minMos, "maxMos": params.maxMos})

class paramsView(APIView):
    def post(self, request):
        print(request)
        newMin = request.data["min"]
        newMax = request.data["max"]
        params = Params.objects.first()
        params.minMos = newMin
        params.maxMos = newMax
        params.save()
        return Response("OK")