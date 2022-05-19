# This is to sanitize the carrd website
with open("./index.html", "r") as f:
    file = f.read()
while True:
    try:
        file = file.replace('><', '>\n<')
    except:
        break
with open("./index.html", "w") as f:
    f.write(file)
    