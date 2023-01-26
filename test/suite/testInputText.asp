inTree(X,Y) | outTree(X,Y) :- edge(X,Y,C). %/ Guess the edges that are part of the tree /%

%/ A DIRECTED GRAPH REPRESENTED BY NODE(_) AND ARC(_,_),AND A STARTING NODE START(_).
FIND A PATH BEGINNING AT THE STARTING NODE WHICH CONTAINS ALL NODES OF THE PATH. /% node(1). node(2). node(3). node(4).

node(1). node(2). node(3). edge(1,2). edge(1,3).
inS(X) | outS(X) :- node(X).
:- edge(X,Y), not inS(X), not inS(Y).