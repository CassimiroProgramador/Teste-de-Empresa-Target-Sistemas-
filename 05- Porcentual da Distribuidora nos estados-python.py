SP = 67.83643
RJ =36.67866
MG = 29.22988
ES = 27.16548
OUTROS = 19.84953
total=(SP+RJ+MG+ES+OUTROS)

print("_"*35)
print("\tMENSAL DA DISTRIBUIDORA\n")
print(f"Valor total: R${total}")
sp=((SP/total)*100)
rj=((RJ/total)*100)
mg=((MG/total)*100)
es=((ES/total)*100)
out=((OUTROS/total)*100)

print("Percentual SP: {:.2f}%".format(sp))
print("Percentual RJ: {:.2f}%".format(rj))
print("Percentual MG: {:.2f}%".format(mg))
print("Percentual ES: {:.2f}%".format(es))
print("Percentual OUTROS: {:.2f}%".format(out))
print("-"*35)