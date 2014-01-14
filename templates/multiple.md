---
title: This title is from PAGE YFM (multiple.hbs)
description: This description is from PAGE YFM (multiple.hbs)
lead: This lead is from PAGE YFM (multiple.hbs)
quux: This property is from PAGE YFM (multiple.hbs)
---
# `explicit` context
Should be from `explicit.json`, then the YFM of the page, then the options, then the root.
{{> foo explicit }}


# `page` context
Should be from the YFM of the page, then the options, then the root.
{{> foo page }}


# `this` context
Should be from the YFM of the page, then the options, then the root.
{{> foo this }}


# `data` context
Should be from the YFM of the include, `foo`, first; then fallback on `foo.json`, then the page, then the options, then the root.
{{> foo data }}


# `foo` context
Should be from the YFM of the include, `foo`, first; then fallback on `foo.json`, then the page, then the options, then the root.
{{> foo foo }}


# empty context
Should be from the YFM of the include, `foo`, first; then fallback on `foo.json`, then the page, then the options, then the root.
{{> foo }}


# `bar` context (block)
Should be from the YFM of the include, `foo`, first; then fallback on `foo.json`, then fallback on `bar.json`, then the page, then the options, then the root.
{{#bar}}
  {{> foo }}
{{/bar}}

# `parent` context (block)
Should use the context from the page.
{{#bar}}
  {{> foo ../this}}
{{/bar}}

{{#bar}}
  {{> foo ../page}}
{{/bar}}