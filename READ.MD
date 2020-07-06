TO start project
npm install
npm start


1.  Add a category
2. Add Product mapped to a category or categories.
==>> 
###############################################
Please ensure category for child for categories
########################################

add product and category in bulk insert
http://localhost:3000/api/prods/init


3. Get all categories with all its child categories mapped to it. Note : Each
category object should look something like this {Id : 1 , child_categories:
[], ...}
==>>
http://localhost:3000/api/category/findDataCategory

4. Get all products by a category.
==>>
get product by category
http://localhost:3000/api/prods/findProduct

5. Update product details (name,price,etc)
for update product
http://localhost:3000/api/prods/updateProduct