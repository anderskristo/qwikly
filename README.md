# qwikly
Qwikly is a Front-End Angular lib to quickly start up a SPA (Singe Page App). Qwikly is built around a json standard  developed by Will &amp; Skill. 


```javascript
{ 
  "pages": [
    {
      "title": "List all timecards",
      "description": "This page is all about how my life got twisted upside down.",
      "frontend_url": "/timecards",
      "api_url": "api/v1/timecards",
      "list": {
        "pagination": true,
        "fields": ["start_date", "end_date", "user.full_name", "title", "description", "created_at"],
        // "search_fields": ["title", ],
        "filter": [
          {
            "label": "Start Date",
            "field": "start_date",
            "type": "1", // Date
            "api_url": ""
          },
          {
            "label": "User"
            "field": "user",
            "type": "0" // Foreign Field
            "api_url": "/api/v1/core/users"
          }
        ]
      },
      "create": {
        "fields": ["start_date", "end_date", "user.full_name", "title", "description"]
      },
      "edit": {
        "fields": ["start_date", "end_date", "user.full_name", "title", "description"]
      },
      "delete": true
    },
    
    {
      "title": "List all Users",
      "description": "This page is all about the users",
      "frontend_url": "/users",
      "api_url": "api/v1/users",
      "list": {
        "pagination": true,
        "fields": ["username", "first_name", "last_name", "email"],
        // "search_fields": ["username", "first_name", "last_name", "email"],
        "filter": [
          {
            "label": "Created Start",
            "field": "created_at__lte",
            "type": "1", // Date
            "api_url": ""
          },
          {
            "label": "Created End"
            "field": "created_at__gte",
            "type": "1", // Date
            "api_url": ""
          },
          {
            "label": "Username"
            "field": "user",
            "type": "0" // Foreign Field
            "api_url": "/api/v1/core/users"
          }
        ]
      },
      "create": {
        "fields": ["start_date", "end_date", "user.full_name", "title", "description"]
      },
      "edit": {
        "fields": ["start_date", "end_date", "user.full_name", "title", "description"]
      },
      "delete": true
    }
  ],
  
}
```
