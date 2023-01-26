node1(1).
start(0). arc(1,2).

strategic(Y) | strategic(Z) :- produced_by(X, Y, Z).
strategic(W) :- controlled_by(W, X, Y, Z), strategic(X), strategic(Y), strategic(Z).

%/
VERTEX COVER
-------------------------------------------------------------------------------
Given a graph, select a subset S of the vertices so that all edges are
covered (i.e., every edge has at least one of the two vertices in S) 
/%
node(1). node(2). node(3). edge(1,2). edge(1,3).

inS(X) | outS(X) :- node(X). 
:- edge(X,Y), not inS(X), not inS(Y).