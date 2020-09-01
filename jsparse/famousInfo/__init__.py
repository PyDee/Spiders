import json

with open('result.json', 'r') as f:
    for line in f:
        print(json.loads(line))
