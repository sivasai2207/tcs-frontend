from tkinter import *
root=Tk()
mb=menubutton(root,text="asdf menu")
mb.menu = Menu(mb)
mb["menu"]=mb.menu
mb.menu.add_command(label="from", command= lambda : print("from file will be imported"))
mb.menu.add_command(label="to", command= lambda : print("to file will be imported"))
mb.pack()
root.mainloop()
