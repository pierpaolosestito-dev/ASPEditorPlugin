% casi funzionanti
% da metchare
#count{a,a:ciao(x,y)}.
#sum{X,x:prova(X,y)}.
#sum{X,x:prova(X,_)}.
#sum{X,x:prova(_,y)}.
#sum{X,x:prova(_,_)}.
#sum{X,x:prova(X)}.
#sum{X,x:prova(_)}.
#count{_,_:ciao(x,y),prova(_,_)}.

%/ commento
multilinea 
/%

#count{ _ , _ : ciao( x , y ) }. %commento
#count{ X , _ : ciao( x , y ) }.
#count{ _ , x : ciao( x , y ) }.
#sum{ X , x : prova( X , y ) }.
#sum{ X , x : prova( X , _ ) }.
#sum{ X , x : prova( _ , y ) }.
#sum{ X , x : prova( _ , _ ) }.
#sum{ X , x : prova( X )}.
#sum{ X , x : prova( _ )}.
#count{ _ , _ : ciao( x , y ) , prova( _ , _ ) }.