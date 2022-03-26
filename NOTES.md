# Python

> Anything inside of <> is what your choice **or** what you're instructed to substitute. Like `<dir_name>` would be the directory you just created.

## In your console

### after the `$`

`mkdir <project_name>`

then do

`cd <dir_name>`

Which moves you into your newly created directory.

## Creating A Virtual Environment

> A virtual environment can sound intimidating. You can just think of it as a folder that will hold your libraries you're going to use for your project. There are many reasons for this. Some are:

- You put your libraries, also commonly called dependencies, in "scope". This makes things cleaner for versions
- You can derive a file called `requirements.txt` from it which you can then share with others that makes it easy for them to simply install the libraries and versions you are using in your project.
- You can run a version of Python directly from this folder that can be different than your system install (the version you have installed that you use everywhere else). This helps control your environment. Though, admitidly will most likely not matter that much.

In your new directory we will created the virtual enviornment with the built in `venv` in python.

```console
python3 -m venv venv
```

this will create a folder structure in the new dir

```console
source project_env/bin/activate
```

running: `which python` will tell you where python is running from. Either from your venv you created or from the system install.

```console
pip install <dependency (A library like pandas)>
```

after installing dependencies you can make a requirements.txt file by:

```console
pip freeze > requirements.txt
```

this will output a file you can share with others to install dependencies

to exit your virtual env

```console
deactivate
```

to delete virtual env

```console
rm -rf project_env/
```

to install from a requirements.txt we do

```console
pip install -r requirements.txt
```

.gitignore the venv

## create environtment with system stuff
