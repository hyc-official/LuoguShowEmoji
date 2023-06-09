#!/usr/bin/env python

import json
import os
import re

# rb = re.split("^[^\n]+\n\n", json.loads(os.environ["MSG"])[-1])
# b = rb[1] if len(rb) > 1 else rb[0]
# open("./src/update-log.txt", "w").write(b)
print(json.loads(open('./package.json').read())['version'])

# thanks for exlg's code
 
