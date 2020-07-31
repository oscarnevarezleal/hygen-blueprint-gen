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
module.exports = {
    name : "<%- name  %>",
    definition: <%- h.controllerStub(name, options)  %>
}

