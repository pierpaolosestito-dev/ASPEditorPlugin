% VERTEX COVER
% -------------------------------------------------------------------------------
% Given a graph, select a subset S of the vertices so that all edges are
% covered (i.e., every edge has at least one of the two vertices in S)

node(1). node(2). node(3). edge(1,2). edge(1,3).

inS(X) | outS(X) :- node(X).

:- edge(X,Y), not inS(X), not inS(Y).

% KNAPSACK PROBLEM
% ---------------------------------------------------------------------------------
% Given a set of object(Name,Weight,Value), determine the number of each object to include in a collection
% so that the total weight is less than or equal to a given capacity(C) 
% and the total value is as large as possible.

object(A,10,10).
object(B,10,5).
object(C,10,7).
object(D,10,5).
object(E,10,5).

capacity (20).

in(X)|out(X) :- object(X,_,_).
:- capacity(C), not #sum{Y,X : object(X,Y,_), in(X)} <= C.
:~ out(X),object(X,_,Y). [Y@1,X]

% SEATING
% ----------------------------------------------------------------------------------------------
% A gala dinner has to be organized and table composition must satisfy a number of requirements:

% - Each table T has a given number of chairs.
% - Each guest must be assigned one and only one table.
% - People liking each other should sit at the same table.
% - People disliking each other should not sit at the same table.

% INPUT facts
table(T,NC). % the set of available tables with corresponding seats
guest(P). % the set of guests to be accommodated
like(P1,P2). % couples of guests who are friends
dislike(P1,P2). % couples of guests disliking each other

% OUTPUT predicates
at(P,T). % guest P is accommodated to table T

% Given some tables of nc chairs each, generate a sitting
% arrangement for a number of given guests.
at(P,T) | not_at(P,T) :- guest(P), table(T,_).
% Each table must not host more than NC guests.
:- table(T,NC), not #count{P : at(P,T)} <= NC.
%Each guest must be assigned one and only one table.
:- guest(P), not #count {T : at(P,T) }=1.
% People liking each other should sit at the same table.
:- like(P1,P2), at(P1,T), not at(P2,T).
% People disliking each other should not sit at the same table.
:- dislike(P1,P2), at(P1,T), at(P2,T).