import requests

words = None
response = requests.get("https://raw.githubusercontent.com/dwyl/english-words/master/words_alpha.txt")
words = response.text.split('\n') if response.status_code == 200 else print("response.status_code != 200")

if words:
    with open("five_letter_words.txt", "w") as file:
        [file.write(word) for word in words if len(word) == 6]