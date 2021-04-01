var convert = require('./index.js');

function fuzz(buff){
   try{
       var doc = convert.xml2json(buff, {compact: true, spaces: 4});
   } catch(e) {
//     if (e instanceof yaml.YAMLException){}
     if (e.message.includes("Text data outside of root node") || 
         e.message.includes("Non-whitespace before first tag") ||
         e.message.includes("Invalid character in tag name") ||
         e.message.includes("Invalid attribute name")||
         e.message.includes("Invalid character in entity name")||
         e.message.includes("Attribute without value")||
         e.message.includes("Unencoded <")||
         e.message.includes("Unquoted attribute value")||
         e.message.includes("Invalid character entity")||
         e.message.includes("Converting circular structure to JSON")|| //this is a bug
         e.message.includes("No whitespace between attributes")||
         e.message.includes("Forward-slash in opening tag not followed by >")||
         e.message.includes("Invalid characters in closing tag")||
         e.message.includes("Invalid tagname in closing tag")||
         e.message.includes("Unmatched closing tag")||
         e.message.includes("Unexpected close tag")) {}
     else {
       throw e;
     }
   }
}

module.exports = {
   fuzz
};

