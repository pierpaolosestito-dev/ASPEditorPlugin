% HAMILTON PATH
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
% A directed graph represented by node(_) and arc(_,_),and a starting node start(_).
% Find a path beginning at the starting node which contains all nodes of the graph. 

inPath(X,Y) | outPath(X,Y) :- arc(X,Y).

reached(X) :- start(X).
reached(X) :- reached(Y), inPath(Y,X).

:- inPath(X,Y), inPath(X,Y1), Y <> Y1.
:- inPath(X,Y), inPath(X1,Y), X <> X1. 
:- node(X), not reached(X).
:- inPath(X,Y), start(Y).
