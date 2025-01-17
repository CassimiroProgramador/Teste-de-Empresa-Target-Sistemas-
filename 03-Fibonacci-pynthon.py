t1 = int(0)
t2 = int(1)
t3 = int(0)
print ('-' *42)
print (' ' *3, 'Consulta da Sequência de Fibonacci')
print ('-' *42)
Valor = int(input('Digite um número: '))
while Valor > t3:
    t3 = t1 + t2
    t1 = t2
    t2 = t3
if Valor == 0 or Valor == 1:
    print ('O número faz parte da sequência de Fibonacci.')
elif Valor == t3:
    print ('O número faz parte da sequência de Fibonacci.')
else:
    print ('O número digitado não faz parte da sequência de Fibonacci.')