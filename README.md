# backend_recipe
## Getting Started

installing Project

```bash
npm i
# or
yarn i
# or
pnpm i
```



First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3001](http://localhost:3001) 

## Learn More
There are several features contained in this project

```bash
1. Web Socket for handling messages in real time
2. Like And Bookmark
3. Use Redis for improve performance  
4. can upload photos 
5. Rest full API
6. use Docker-Compose For redis                              
```

## Dokumentasi 

```bash
{
	"info": {
		"_postman_id": "822d3086-048a-4653-bca8-a50472c0003b",
		"name": "Recipe_BE",
		"schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json",
		"_exporter_id": "26479318",
		"_collection_link": "https://warped-star-58649.postman.co/workspace/Team-Workspace~e7bddc4a-4792-4776-8a08-ff7b9f501082/collection/26479318-822d3086-048a-4653-bca8-a50472c0003b?action=share&source=collection_link&creator=26479318"
	},
	"item": [
		{
			"name": "Recipe",
			"item": [
				{
					"name": "PostRecipe",
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImY2MjY5NWU2LTNmNWQtNGE1YS1hMzJlLWZiZjllYTUxMDkwYyIsIm5hbWEiOiJhcml5YW5kYSIsImVtYWlsIjoiY2VyaWFAZ21haWwuY29tIiwiaWF0IjoxNjkyMTI1NDU1LCJleHAiOjE2OTIxMjU1NTV9.brVnUM50Dq3Nrsza1mIJ2GW4jhGr4nX68D-eIPizRjY",
									"type": "string"
								}
							]
						},
						"method": "POST",
						"header": [],
						"body": {
							"mode": "formdata",
							"formdata": [
								{
									"key": "title",
									"value": "dia",
									"type": "text"
								},
								{
									"key": "ingredients",
									"value": "telur",
									"type": "text"
								},
								{
									"key": "category",
									"value": "desart",
									"type": "text"
								},
								{
									"key": "photo",
									"type": "file",
									"src": "/home/selemene/Downloads/upload project/Rectangle 328.png"
								}
							]
						},
						"url": {
							"raw": "http://localhost:3001/recipe",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "3001",
							"path": [
								"recipe"
							]
						}
					},
					"response": []
				},
				{
					"name": "Getall",
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImRkMWMwZWMzLTJhZDUtNDY0Zi05YzIyLWQ0ZmUyYmJkN2M1ZSIsIm5hbWEiOiJzZWxlbWVuZSIsImVtYWlsIjoiYWt1c2xhbHVAZ21haWwuY29tIiwiaWF0IjoxNjk1NjMyMDUxLCJleHAiOjE2OTU2NDIwNTF9.rBNMCNsiL5eyjTzuK9l1b7kFIRItbigJOnhkLI9gH0I",
									"type": "string"
								}
							]
						},
						"method": "GET",
						"header": [],
						"url": {
							"raw": "http://localhost:3001/recipe",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "3001",
							"path": [
								"recipe"
							]
						}
					},
					"response": []
				},
				{
					"name": "GetDaftarMenuYang di buat",
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjM5NzkwMTJkLTc1YWUtNGU1OC1iZDk1LTY0MmRjMGQwNDVmNCIsIm5hbWEiOiJzZWxlbWVuZSIsImVtYWlsIjoiYWt1c2xhbHVAZ21haWwuY29tIiwiaWF0IjoxNjkxNDIzNTQ5LCJleHAiOjE2OTE0MjcxNDl9.tQLE9KB4y07zS_eHu94Jjq318qzqsM8i83LgdodNId8",
									"type": "string"
								}
							]
						},
						"method": "GET",
						"header": [],
						"url": {
							"raw": "http://localhost:3001/recipe/id",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "3001",
							"path": [
								"recipe",
								"id"
							]
						}
					},
					"response": []
				},
				{
					"name": "Put recipe",
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjM5NzkwMTJkLTc1YWUtNGU1OC1iZDk1LTY0MmRjMGQwNDVmNCIsIm5hbWEiOiJzZWxlbWVuZSIsImVtYWlsIjoiYWt1c2xhbHVAZ21haWwuY29tIiwiaWF0IjoxNjkxNDI3Mjc3LCJleHAiOjE2OTE0MzA4Nzd9.aYlCvuc1Tw_YM4Ax5cnOymvCY_0RWBbsVMv7F61plqE",
									"type": "string"
								}
							]
						},
						"method": "PUT",
						"header": [],
						"body": {
							"mode": "formdata",
							"formdata": [
								{
									"key": "title",
									"value": "akuaku",
									"type": "text"
								},
								{
									"key": "ingredients",
									"value": "kau",
									"type": "text"
								},
								{
									"key": "category",
									"value": "KUA",
									"type": "text"
								},
								{
									"key": "photo",
									"type": "file",
									"src": "/home/selemene/Pictures/Screenshots/Screenshot from 2023-08-04 21-02-48.png"
								}
							]
						},
						"url": {
							"raw": "http://localhost:3001/recipe/b60a43e6-8e3e-4992-80cf-971347ec6648",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "3001",
							"path": [
								"recipe",
								"b60a43e6-8e3e-4992-80cf-971347ec6648"
							]
						}
					},
					"response": []
				},
				{
					"name": "Get Detail Data By ID",
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjM5NzkwMTJkLTc1YWUtNGU1OC1iZDk1LTY0MmRjMGQwNDVmNCIsIm5hbWEiOiJzZWxlbWVuZSIsImVtYWlsIjoiYWt1c2xhbHVAZ21haWwuY29tIiwiaWF0IjoxNjkyMDI0MDQ0LCJleHAiOjE2OTIwMjQxNDR9.nSVYzLsAm4i1y2RgM2Txbgv23M0a-WC2i_Cwo_TrGdA",
									"type": "string"
								}
							]
						},
						"method": "GET",
						"header": [],
						"url": {
							"raw": "http://localhost:3001/recipe/7462d9fd-31ef-4ff2-9dee-116f431af28b",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "3001",
							"path": [
								"recipe",
								"7462d9fd-31ef-4ff2-9dee-116f431af28b"
							]
						}
					},
					"response": []
				},
				{
					"name": "Pagination",
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImRkMWMwZWMzLTJhZDUtNDY0Zi05YzIyLWQ0ZmUyYmJkN2M1ZSIsIm5hbWEiOiJzZWxlbWVuZSIsImVtYWlsIjoiYWt1c2xhbHVAZ21haWwuY29tIiwiaWF0IjoxNjk1NjMyMDUxLCJleHAiOjE2OTU2NDIwNTF9.rBNMCNsiL5eyjTzuK9l1b7kFIRItbigJOnhkLI9gH0I",
									"type": "string"
								}
							]
						},
						"method": "GET",
						"header": [],
						"url": {
							"raw": "http://localhost:3001/recipe/pagination/recipe?searchBy=title&search=bur",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "3001",
							"path": [
								"recipe",
								"pagination",
								"recipe"
							],
							"query": [
								{
									"key": "searchBy",
									"value": "title"
								},
								{
									"key": "search",
									"value": "bur"
								}
							]
						}
					},
					"response": []
				}
			]
		},
		{
			"name": "User",
			"item": [
				{
					"name": "CreateUser",
					"protocolProfileBehavior": {
						"disabledSystemHeaders": {}
					},
					"request": {
						"method": "POST",
						"header": [],
						"body": {
							"mode": "formdata",
							"formdata": [
								{
									"key": "nama",
									"value": "selemene",
									"type": "text"
								},
								{
									"key": "email",
									"value": "akuslalu@gmail.com",
									"type": "text"
								},
								{
									"key": "password",
									"value": "dia",
									"type": "text"
								},
								{
									"key": "profil",
									"type": "file",
									"src": "/home/selemene/Downloads/upload project/main-qimg-8728cf400d75a377a74f2a0a902b8979-lq.jpeg"
								}
							]
						},
						"url": {
							"raw": "http://localhost:3001/user/",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "3001",
							"path": [
								"user",
								""
							],
							"query": [
								{
									"key": "nama",
									"value": "aku",
									"disabled": true
								},
								{
									"key": "email",
									"value": "aku@gmail.com",
									"disabled": true
								},
								{
									"key": "password",
									"value": "akuakuakuakiu",
									"disabled": true
								},
								{
									"key": "profil",
									"value": "123",
									"disabled": true
								}
							]
						}
					},
					"response": []
				},
				{
					"name": "GetAll",
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImRkMWMwZWMzLTJhZDUtNDY0Zi05YzIyLWQ0ZmUyYmJkN2M1ZSIsIm5hbWEiOiJzZWxlbWVuZSIsImVtYWlsIjoiYWt1c2xhbHVAZ21haWwuY29tIiwiaWF0IjoxNjk1NjMyMDUxLCJleHAiOjE2OTU2NDIwNTF9.rBNMCNsiL5eyjTzuK9l1b7kFIRItbigJOnhkLI9gH0I",
									"type": "string"
								}
							]
						},
						"method": "GET",
						"header": [],
						"url": {
							"raw": "http://localhost:3001/user",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "3001",
							"path": [
								"user"
							]
						}
					},
					"response": []
				},
				{
					"name": "GetbyID",
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImNhNDc2MGE1LTZmNWMtNGE4Ni05ODEwLTU0OGZjNzQwZDcwZCIsIm5hbWEiOiJBcml5YW5kYTEyMyIsImVtYWlsIjoiYXJpeWFuZGExMjk4QGdtYWlsLmNvbSIsImlhdCI6MTY5MTMyMzA1OSwiZXhwIjoxNjkxMzI2NjU5fQ.v0FJGf_23iTQ6wTUbhxT21aqzZsSu0vKHrP1PZJiu0A",
									"type": "string"
								}
							]
						},
						"method": "GET",
						"header": [],
						"url": {
							"raw": "http://localhost:3001/user/ca4760a5-6f5c-4a86-9810-548fc740d70d",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "3001",
							"path": [
								"user",
								"ca4760a5-6f5c-4a86-9810-548fc740d70d"
							]
						}
					},
					"response": []
				},
				{
					"name": "UpdateUser",
					"request": {
						"method": "PUT",
						"header": [],
						"body": {
							"mode": "formdata",
							"formdata": [
								{
									"key": "nama",
									"value": "ladang",
									"type": "text"
								},
								{
									"key": "email",
									"value": "ariyanda@gmail.com",
									"type": "text"
								},
								{
									"key": "password",
									"value": "dia",
									"type": "text"
								},
								{
									"key": "profil",
									"type": "file",
									"src": "/home/selemene/Downloads/upload project/Rectangle 328.png"
								}
							]
						},
						"url": {
							"raw": "http://localhost:3001/user/378d209f-5ea2-4a27-bf2e-e8a6b2c88675",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "3001",
							"path": [
								"user",
								"378d209f-5ea2-4a27-bf2e-e8a6b2c88675"
							]
						}
					},
					"response": []
				},
				{
					"name": "DeleteUser",
					"request": {
						"method": "GET",
						"header": []
					},
					"response": []
				},
				{
					"name": "LoginUser",
					"protocolProfileBehavior": {
						"disabledSystemHeaders": {}
					},
					"request": {
						"method": "POST",
						"header": [
							{
								"key": "multi",
								"value": "",
								"type": "text"
							}
						],
						"body": {
							"mode": "raw",
							"raw": "{\n    \"email\" : \"akuslalu@gmail.com\",\n    \"password\" : \"dia\"\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "http://localhost:3001/user/login",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "3001",
							"path": [
								"user",
								"login"
							]
						}
					},
					"response": []
				},
				{
					"name": "Navbar",
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjM5NzkwMTJkLTc1YWUtNGU1OC1iZDk1LTY0MmRjMGQwNDVmNCIsIm5hbWEiOiJzZWxlbWVuZSIsImVtYWlsIjoiYWt1c2xhbHVAZ21haWwuY29tIiwiaWF0IjoxNjkyMDk5MDIyLCJleHAiOjE2OTIwOTkxMjJ9.F6_9NnOcLIBMTGgXWvIA5ht5te9rximQYEp_mnKlXXc",
									"type": "string"
								}
							]
						},
						"method": "GET",
						"header": [],
						"url": {
							"raw": "http://localhost:3001/user/users/navbar",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "3001",
							"path": [
								"user",
								"users",
								"navbar"
							]
						}
					},
					"response": []
				}
			]
		},
		{
			"name": "Utility",
			"item": [
				{
					"name": "auth",
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjM5NzkwMTJkLTc1YWUtNGU1OC1iZDk1LTY0MmRjMGQwNDVmNCIsIm5hbWEiOiJzZWxlbWVuZSIsImVtYWlsIjoiYWt1c2xhbHVAZ21haWwuY29tIiwiaWF0IjoxNjkyMDk3MzQ3LCJleHAiOjE2OTIwOTc0NDd9.tuYb35wwkO41Ydm_xSikrpMk8H23eB_fHEWXzJ80HdI",
									"type": "string"
								}
							]
						},
						"method": "POST",
						"header": [],
						"url": {
							"raw": "http://localhost:3001/Auth",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "3001",
							"path": [
								"Auth"
							]
						}
					},
					"response": []
				},
				{
					"name": "COmment",
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjM5NzkwMTJkLTc1YWUtNGU1OC1iZDk1LTY0MmRjMGQwNDVmNCIsIm5hbWEiOiJzZWxlbWVuZSIsImVtYWlsIjoiYWt1c2xhbHVAZ21haWwuY29tIiwiaWF0IjoxNjkyMDQzODU1LCJleHAiOjE2OTIwNDM5NTV9.dF2HRJpZxnjZUfX2j8hLCAgBvRPsvQ3tDvAHOC67Nqg",
									"type": "string"
								}
							]
						},
						"method": "POST",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "{\n    \"commentar\": \"dia\"\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "http://localhost:3001/com/7462d9fd-31ef-4ff2-9dee-116f431af28b",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "3001",
							"path": [
								"com",
								"7462d9fd-31ef-4ff2-9dee-116f431af28b"
							]
						}
					},
					"response": []
				},
				{
					"name": "GetCOm",
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjM5NzkwMTJkLTc1YWUtNGU1OC1iZDk1LTY0MmRjMGQwNDVmNCIsIm5hbWEiOiJzZWxlbWVuZSIsImVtYWlsIjoiYWt1c2xhbHVAZ21haWwuY29tIiwiaWF0IjoxNjkyMDMwOTA2LCJleHAiOjE2OTIwMzEwMDZ9.cPOYCfz29dZfEE_pQXTyhtWmWvMcP-UQnkrZcHQzXPQ",
									"type": "string"
								}
							]
						},
						"method": "GET",
						"header": [],
						"url": {
							"raw": "http://localhost:3001/com/7462d9fd-31ef-4ff2-9dee-116f431af28b",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "3001",
							"path": [
								"com",
								"7462d9fd-31ef-4ff2-9dee-116f431af28b"
							]
						}
					},
					"response": []
				},
				{
					"name": "liked",
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImY2MjY5NWU2LTNmNWQtNGE1YS1hMzJlLWZiZjllYTUxMDkwYyIsIm5hbWEiOiJzZWxlbWVuZSIsImVtYWlsIjoiYXJlYXJlQGdtYWlsLmNvbSIsImlhdCI6MTY5MjE3OTk2OSwiZXhwIjoxNjkyMTgwMDY5fQ.keuL0Bg-a0xVlXx_ehvjB7oJzPQE7oXzuoEZOC4c7YM",
									"type": "string"
								}
							]
						},
						"method": "POST",
						"header": [],
						"url": {
							"raw": "http://localhost:3001/com/liked",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "3001",
							"path": [
								"com",
								"liked"
							]
						}
					},
					"response": []
				}
			]
		},
		{
			"name": "Like Recipe",
			"item": [
				{
					"name": "New Request",
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImRkMWMwZWMzLTJhZDUtNDY0Zi05YzIyLWQ0ZmUyYmJkN2M1ZSIsIm5hbWEiOiJzZWxlbWVuZSIsImVtYWlsIjoiYWt1c2xhbHVAZ21haWwuY29tIiwiaWF0IjoxNjkzNjk2NjE5LCJleHAiOjE2OTM3MDY2MTl9.X0m5ANYDMBzQVhm56cnxsLOjDWITLJa8RWWgXFr0C6c",
									"type": "string"
								}
							]
						},
						"method": "POST",
						"header": [],
						"url": {
							"raw": "http://localhost:3001/like/88e10c0d-7dd6-4e9c-845f-dad197e0bd69",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "3001",
							"path": [
								"like",
								"88e10c0d-7dd6-4e9c-845f-dad197e0bd69"
							]
						}
					},
					"response": []
				},
				{
					"name": "New Request",
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImRkMWMwZWMzLTJhZDUtNDY0Zi05YzIyLWQ0ZmUyYmJkN2M1ZSIsIm5hbWEiOiJzZWxlbWVuZSIsImVtYWlsIjoiYWt1c2xhbHVAZ21haWwuY29tIiwiaWF0IjoxNjkzNjczMDIxLCJleHAiOjE2OTM2ODMwMjF9.nNXariOAf_t7fn4BEsCPhEayeKPFfiJAfLQxSPjIEBU",
									"type": "string"
								}
							]
						},
						"method": "GET",
						"header": [],
						"url": {
							"raw": "http://localhost:3001/like/CountLike/88e10c0d-7dd6-4e9c-845f-dad197e0bd69",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "3001",
							"path": [
								"like",
								"CountLike",
								"88e10c0d-7dd6-4e9c-845f-dad197e0bd69"
							]
						}
					},
					"response": []
				}
			]
		}
	]
}                             
```




