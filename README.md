# NewsBlog  using  React + Vite + Tailwind CSS + Firebase


# Working Steps
1. Create React project setup using vite and react router dom (version 6.29.0 )
2. Add tailwind CSS (v3.4.17) and DaisyUI components library ( 3.9.4)


*********


********



3. create component route,home page, header, 
4. install  moment js for dynamic local time display
5. install react marquee for news slider 

6. create LeftAside, RightAside and ArticlePart component
7. working with RightAside component- install " react-icons " for Facebook and Github icon and add image

8. Create LeftAside section- load build in json data form public folder using fetch() under useEffect() and store that data into state, show into front page
09. Apply NavLink {isActive} attribute to render dynamic style according active NavLink

10. Load news JSON data from 'public' derectory using fetch() and render max 3 data using Array.slice() and map() into left side content section
11. Load news JSON data and show  8 news items with author name, author image, publish date, news title, news image, news content with Read more button into middle side news content section

12. create login and register page with route 
13. use FormData() and FormData(e.currentTarget).get('field name') for access input field data

14. firebase SDK integration 
15. use .env to hide firebase configuration [ API key, API id ...]

16. create AuthContext using createContext() to handle props drilling and create AuthProvider.jsx to handle Authentication
17. create user using firebase createUserWithEmailAndPassword() method

18. create Login/Signin existing users process using signInWithEmailAndPassword() 

19. Set an authentication state observer/tracker by onAuthStateChanged() and get user data

20. Set user Name during createing user acount using updateProfile() and display login user name in Navbar

21. Show 'Logout' button if user is login and make Logout functionality using ' signOut() '

22. Redirect user into homepage after Log in and Register using useNavigate()

23. create NewsDetails page to view news after click " Read More " button in home page



