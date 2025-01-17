import json

def main():
    file = open('dados.json')
    vetor = json.load(file)
    file.close()

    menor = min(map(lambda x: float(x['valor']), vetor))
    print(f'O menor valor de faturamento ocorrido em um dia do mês: {menor}')

    maior = max(map(lambda x: float(x['valor']), vetor))
    print(f'O maior valor de faturamento ocorrido em um dia do mês: {maior}')

    soma = sum(map(lambda x: float(x['valor']), vetor))
    count = len(vetor)
    media = soma / count
    quantidade = sum(map(lambda x: 1 if int(x['valor']) > media else 0, vetor))
    print(f'Número de dias no mês em que o valor de faturamento diário foi superior à média mensal: {quantidade}')


if __name__ == "__main__":
    main()