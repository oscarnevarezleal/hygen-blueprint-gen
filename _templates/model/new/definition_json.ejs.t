---
to: .blueprint/models/<%= name %>.js
---
<%
 NameCapitalized = h.capitalize(name)
%>
{
    "name" : "<%- NameCapitalized  %>",
    "definition": <%- h.modelStub(locals, name, {})  %>
}

