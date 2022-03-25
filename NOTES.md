# Python

mkdir anywhere
cd into your new dir

```
python3 -m venv venv
```

this will create a folder structure in the new dir

```
source project_env/bin/activate
```

running: `which python` will tell you where python is running from

after installing dependencies you can make a requirements.txt file by:

```
pip freeze > requirements.txt
```

this will output a file you can share with others to install dependencies

to exit your virtual env

```
deactivate
```

to delete virtual env

```
rm -rf project_env/
```

to install from a requirements.txt we do

```
pip install -r requirements.txt
```

.gitignore the venv

## create environtment with system stuff
