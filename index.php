<?php 
    echo 10 + 10;
    // echo is case insensitive 
    // echo is a language construct that is used to print something or display the output in browser.

    echo "wirting something it will not give line break</br>"; // we need to use br tag for line breaks (void tags - <br />  <hr/>)

    
    // Variables for PHP : variables are an abstract storage location. they can store any kind of data.

    $name = "john doe";         // $ is used before a variable to tell it is a variable.

    //  PHP is loosely typed language, so we don't need to specify the data type of a variable.
    // php variables are case sensitive.

    $a = $b = $c = $d =20;

    echo $a + $b + $c + $d;

    // PHP is a server side language, so it will not show the code in the browser.

    // PHP with Html :-

    // HTML gives a static website but with PHP we can make it Dynamic as we can connect it with database.
    //  and that code can be beautified by using HTML.
    

    echo "</br><h1 style='color: red'> Php with Html</h1></br>";

    echo "<h4> in Older version the varaibles are echoed like this inside html tags outside it is giving error:".$name."</h4>" ; 

    

?>