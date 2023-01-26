node(1)
arc(1,). arc(2,1). arc(3,). 
arc(1,). arc(2,1). arc(3,). %/ COMMENTO 
MULTILINEA /% node(1)

reached(X) :- start(X)

start(0). arc(3,2,).
inPath(X,Y) | outPath(X,Y) : arc(X,Y).
reached(X) :- start(X)