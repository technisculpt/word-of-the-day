import requests

words = None
response = requests.get("https://raw.githubusercontent.com/dwyl/english-words/master/words_alpha.txt")
words = response.text.split('\n') if response.status_code == 200 else print("response.status_code != 200")

if words:
    with open("five_letter_words.txt", "w", newline='\n') as file:
        [file.write(f"{word}\n") for word in words if len(word) == 6]