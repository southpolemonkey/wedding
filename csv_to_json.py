import pandas as pd
import json
import sys

df = pd.read_csv(sys.argv[1])

parsed = json.loads(df.to_json(orient="records"))

with open("item_new.json", 'w') as f:
    f.write(json.dumps(parsed))
