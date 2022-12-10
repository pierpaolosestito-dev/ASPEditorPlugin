// casi funzionanti
## da metchare
#count{a,a:ciao(x,y)}.
#sum{X,x:prova(X,y)}.
#sum{X,x:prova(X,_)}.
#sum{X,x:prova(_,y)}.
#sum{X,x:prova(_,_)}.
#sum{X,x:prova(X)}.
#sum{X,x:prova(_)}.
#count{_,_:ciao(x,y),prova(_,_)}.
 
#count{ _ , _ : ciao( x , y ) }.
#count{ X , _ : ciao( x , y ) }.
#count{ _ , x : ciao( x , y ) }.
#sum{ X , x : prova( X , y ) }.
#sum{ X , x : prova( X , _ ) }.
#sum{ X , x : prova( _ , y ) }.
#sum{ X , x : prova( _ , _ ) }.
#sum{ X , x : prova( X )}.
#sum{ X , x : prova( _ )}.
#count{ _ , _ : ciao( x , y ) , prova( _ , _ ) }.

## non machare
#count{ _ , _ : ciao( x  y ) }.
#count{ X  _ : ciao( x , y ) }.
#count{ _ , x  ciao( x , y ) }.
#sum{ X , x : prova X , y ) }.
#count{ _ , _ : ciao( x , y ) , prova( __ ) }.