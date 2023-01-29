
prova(1) %/ prova 
    HAMILTON PATH
    ------------------------------------------------------------------------------------
    A directed graph represented by node(_) and arc(_,_),and a starting node start(_).
    Find a path beginning at the starting node which contains all nodes of the graph. 
prova /% prova(1)
prova %** prova
    @test(name = "test_01",
    scope = {"block01"},
    input = "b(1). c(1). b(2). c(3).",
    assert = {
    @isAnswerSet (set = "b(1). c(1). b(2). c(3). a(1). a(3).")
    }
prova ciao**% prova(1)

%/
/%
#count{X : p(X)}. prova(Y):-ciao(X).
prova(X).
iao(X). &append(L1,L2;LR). ci(A). 