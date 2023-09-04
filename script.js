$(function() {

    // Supported Languages
    var lang1 = [ "auto","hi","en", "it", "fr", "de","zh-cn", "ko", "es", "id", "pt", "ru", "ja", "fi"];
    var lang1txt = [ "Auto Detect","Hindi","English", "Italy", "France", "Germany","China", "Korea", "Espana", "Bahasa Indonesia", "Portugal", "Rusian", "Japanese","Filipino"];
    var lang2 = [ "en","hi","it", "fr", "de","zh-cn", "ko", "es", "id", "pt", "ru", "ja", "fi"];
    var lang2txt = [ "English","Hindi", "Italy", "France", "Germany","China", "Korea", "Espana", "Bahasa Indonesia", "Portugal", "Rusian", "Japanese", "Filipino"];
    
    // Main Elements
    var elm = { "lang1": $("#lang1"), "lang2": $("#lang2"), "user": $("#lang1"), "output": $("#lang2"), "userInput": $("#user"), "langOutput": $("#output") }
        
    // Importing Options
    for (let i in lang1) { elm.lang1.append( "<option value='" + lang1[i] + "'>" + lang1txt[i] + "</option>" ); }
    for (let i in lang2) { elm.lang2.append( "<option value='" + lang2[i] + "'>" + lang2txt[i] + "</option>" ); }
    
    // Translate API
    function translate() {
        
    // Formatting Text for URL
    var format = elm
     .userInput
     .val()
     .replace(/ /g , '%20');
        
    // Calling JSON
    $.getJSON( "https://translate.googleapis.com/translate_a/single?client=gtx&sl=" + elm.user.val() + "&tl=" + elm.output.val() + "&dt=t&dt=t&q=" + format,
    function(JSON) { var convert = JSON.toString(); var temp =  convert.split(","); elm.langOutput.val(temp[0]); });}
        
    // Interactive Elements
    $("#translate").on("click", function() { translate(); });
    $("#clear").on("click", function() {
            elm.userInput.val(null);
            elm.langOutput.val(null);
    });
        
    setInterval(function() {
    $("#from").text(
    $("#lang1").val() );
    $("#to").text(
    $("#lang2").val() );}, 10); });
    