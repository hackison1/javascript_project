<script>
    var g1 = new Date(2019, 08, 03, 11, 45, 55);
    // (YYYY, MM, DD, Hr, Min, Sec)
    var g2 = new Date(2019, 08, 03, 10, 22, 42);
    if (g1.getTime() < g2.getTime())
        document.write("g1 is lesser than g2");
    else if (g1.getTime() > g2.getTime())
        document.write("g1 is greater than g2");
    else
        document.write("both are equal");
  
javascript: ; 
</script>
