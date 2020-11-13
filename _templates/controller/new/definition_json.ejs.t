---
to: .blueprint/controllers/<%= name %>.js
---
<%
 NamePlural = h.inflection.pluralize(name)
 NameLowerCased = name.toLowerCase()
 NameLowerCasedPlural = h.inflection.pluralize(name.toLowerCase())
 NameCapitalized = h.capitalize(name)
 options = {NamePlural, NameLowerCased, NameLowerCasedPlural, NameCapitalized}
%>
{
    "name" : "<%- NameCapitalized  %>",
    "definition": <%- h.controllerStub(locals, name, options)  %>
}

