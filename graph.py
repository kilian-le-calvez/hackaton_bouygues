import matplotlib.pyplot as plt

data = [1,2,2,3,3,3,4,4,5]

plt.hist(data)

plt.title('Your data consommation', fontsize=15)

plt.savefig("data_conso.png")

plt.show()