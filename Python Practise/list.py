# Que 1
a=[1,2]
b=[3,4]
a.append(b)
print(a) #[1, 2, [3, 4]]
b.append(5) 
print(a) #[1, 2, [3, 4, 5]]

#2 Ques
a=[1,2]
b=a.copy()
print(b)
b.append(3)
print(a,b)

#3 Ques
a=[[2],[1],[2,3]]
a.sort()
print(a)

#4 Ques
a=[1,True,False,1.0,1]
a.remove(1) #only 1 one can be remove [True, False, 1.0, 1]
print(a)

#5 Ques
a=[10,20,30,20]
print(a.index(20,2))


#6 Ques
a=[10,20,30,20]
a.pop(-2)
a.pop()
print(a)

# 7 Ques
a=[1,2]
b=a
print(a,b)
a.extend([3])
print(a,b)

c=a.copy()
print(a,b,c)
