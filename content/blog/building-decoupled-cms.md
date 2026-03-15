---
title: Building Decoupled Web Apps with OctoberCMS and Vue.js
description: How I approach building API-first applications using OctoberCMS as a headless backend and Vue.js on the frontend — lessons learned from real projects.
date: 2024-03-10
tags: [OctoberCMS, Vue.js, REST API, Laravel, PHP]
---

Over the past few years, one stack I keep reaching for is **OctoberCMS** as a headless backend paired with **Vue.js** on the frontend. It combines the power of a battle-tested Laravel-based CMS with the reactivity of a modern JS framework.

## Why This Combination?

OctoberCMS gives you a robust admin panel, plugin ecosystem, and a clean MVC structure — all sitting on top of Laravel. Vue.js gives you a reactive, component-driven frontend that your users will love. When you connect the two through a REST API, you get the best of both worlds.

## The Architecture

The key is treating OctoberCMS purely as an API provider:

1. **Define your models** in OctoberCMS using its plugin system
2. **Expose REST endpoints** via custom routes or the `RainLab.Api` plugin
3. **Consume the API** from Vue.js using Axios

```php
// routes.php in your OctoberCMS plugin
Route::get('/api/products', 'ProductController@index');
Route::post('/api/orders', 'OrderController@store');
```

```js
// Vue.js component
const { data } = await axios.get('/api/products')
```

## Practical Tips

- Use OctoberCMS's built-in authentication scaffolding for secure API endpoints
- Leverage JSON API transformers to keep your API responses consistent
- Use Nuxt.js instead of plain Vue for SSR/SSG benefits in production
- Store API tokens in `httpOnly` cookies, not `localStorage`

## Lessons Learned

The biggest challenge is CORS configuration during local development. Set it up early, before you have 20 API calls failing. Also, invest time in a good API response structure upfront — changing it mid-project is painful.

This pattern has served me well across multiple client projects, and I highly recommend it for teams that need a manageable CMS for content editors *and* a modern frontend experience for end users.
