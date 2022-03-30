# Python

Notes:

> Anything inside of <> is what your choice **or** what you're instructed to substitute. Like `<dir_name>` would be the directory you just created.

---

## Create Your Project

### after the `$`

`mkdir <project_name>`

then do

`cd <dir_name>`

Which moves you into your newly created directory.

---

## Create A Virtual Environment

Notes:

> A virtual environment can sound intimidating. You can just think of it as a folder that will hold your libraries you're going to use for your project. There are many reasons for this. Some are:
>
> - You put your libraries, also commonly called dependencies, in "scope" (contained all together with no outside influence).
> - You can derive a file called `requirements.txt` from it which you can then share with others that makes it easy for them to simply install the versions of the libraries you are using in your project.
> - You can run a different version of Python directly from this folder rather than your system install (the version of Python you have installed that you use everywhere else on your computer).

### In your new project directory

We will created the virtual environment with the built in `venv` in python.

In your console after the `$`

```console
python3 -m venv venv
```

This will create a folder called `venv` inside of your project folder. It will automatically inject the version of Python that is in your system into this folder.

Next, we will activate the virtual environment. This will make it so you'll only use the version of Python and the libraries you're going to use from this folder. Again, this is done to "scope" your dependencies. This makes sure nothing breaks in the future.

In your console after the `$`

```console
source project_env/bin/activate
```

That's it! Now you should have a `(venv)` somewhere on your console command line.

running: `which python` will tell you where python is running from. Either from your venv you created or from the system install.

---

## Install Dependencies

Next we'll load up the project with the dependencies (libraries). Try pandas and some other familiar ones.

In your console after the `$`

```console
pip install <dependency_name>
```

That's it. Your project is ready to go. Add .py files and start coding!

---

## Sharing Your Project

Your project structure can be shared with others. Simply make a requirements.txt file by running the following commands in the console while in your project directory.

```console
pip freeze > requirements.txt
```

Now when you share this project all they have to do is run:

```console
pip install -r requirements.txt
```

---

## Exiting (And Deleting) Virtual Environment

To exit your virtual env

```console
deactivate
```

to delete virtual env

```console
rm -rf project_env/
```

.gitignore the venv

## create environment with system stuff
