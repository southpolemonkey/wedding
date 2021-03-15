import os
import glob

for file in glob.glob('*'):
    extension = file.rsplit(".")[-1]
    filename = file.rsplit(".")[0]
    newfilename = filename + ".png"
    os.rename(file, newfilename)
