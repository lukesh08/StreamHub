// Movie data with FAST loading Imgur images
const movies = {
    trending: [
        { title: 'Wednesday', img: 'https://m.media-amazon.com/images/M/MV5BMDE1NjNmZjgtZTg0OC00NjkxLWEzYzItMDNkMTc3YjgxZWQyXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg' },
        { title: 'The Last of Us', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsdFGV-ZtJifRuO6DbzksF3ecQf-60FeMNpQ&s' },
        { title: 'Money Heist', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDA9A2NCQ1m95V4xWvwkvHV10pZyhIu6OQDA&s' },
        { title: 'Breaking Bad', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4CWA1JZ-ATqDb3QMbuTCdFHB_zyuZbVwiSQ&s' },
        { title: 'The Witcher', img: 'https://resizing.flixster.com/V7RfPDIpiqZs0y89oCDRUs8dELw=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p17580186_i_v9_ad.jpg' },
        { title: 'Squid Game', img: 'https://puzzlemania-154aa.kxcdn.com/products/2024/puzzle-clementoni-1000-pieces-netflix-squid-game.webp' },
        { title: 'Dark', img: 'https://honest-reviews.in/wp-content/uploads/2020/07/dark_s3_poster.jpg?w=640' },
        { title: 'Peaky Blinders', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2XT5756tW86LjoDGkDRJDBZToM2b54suo8w&s' },
        { title: 'The Crown', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUlt98_cNiISAoVwwOWkYaJdvx0_iIOt_Nig&s' },
        { title: 'Ozark', img: 'https://resizing.flixster.com/ybEIj9AiAe_7xPnelQAfSleG0cM=/fit-in/705x460/v2/https://resizing.flixster.com/3ko6zO6791p1QPOXHUI2eCwmHXQ=/ems.cHJkLWVtcy1hc3NldHMvdHZzZXJpZXMvMDIyOTBmN2QtMzM0Yi00ODUxLWE0MWYtMmViYWJiOGViZjRkLmpwZw==' }
    ],
    popular: [
        { title: 'Stranger Things', img: 'https://i.guim.co.uk/img/media/344f3917f3e40dbb745e498dd31ab84e4b098981/0_901_3000_2400/master/3000.jpg?width=1200&quality=85&auto=format&fit=max&s=ac0d4a27f8be74812ac9801331e6213c' },
        { title: 'The Office', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDVAFSGqter_Hb6R_5Xx5xvBvKEKaRIUKFQA&s' },
        { title: 'Friends', img: 'https://m.media-amazon.com/images/M/MV5BOTU2YmM5ZjctOGVlMC00YTczLTljM2MtYjhlNGI5YWMyZjFkXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg' },
        { title: 'Game of Thrones', img: 'https://m.media-amazon.com/images/M/MV5BMTNhMDJmNmYtNDQ5OS00ODdlLWE0ZDAtZTgyYTIwNDY3OTU3XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg' },
        { title: 'Narcos', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlDuF40zH7xRaoVFjvUu8U7HVIucB-OiM3ug&s' },
        { title: 'Black Mirror', img: 'https://resizing.flixster.com/yL-MXHM_ttXdnKBofDnTdOQf_WE=/ems.cHJkLWVtcy1hc3NldHMvdHZzZXJpZXMvZmQ5YTcxMDgtZWI5My00MmQzLWI1OGMtNTI0Zjk1NGYyYTBhLmpwZw==' },
        { title: 'Sherlock', img: 'https://m.media-amazon.com/images/M/MV5BNTQzNGZjNDEtOTMwYi00MzFjLWE2ZTYtYzYxYzMwMjZkZDc5XkEyXkFqcGc@._V1_.jpg' },
        { title: 'The Mandalorian', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0luE8kykG2pZwOa3Hb25gnGEbYzfl4gCvuA&s' },
        { title: 'Vikings', img: 'https://m.media-amazon.com/images/M/MV5BOTFmZmExYTEtYmE0Mi00MzRmLWE4ZDYtOThiNzNlOTIyODljXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg' },
        { title: 'Lucifer', img: 'https://m.media-amazon.com/images/M/MV5BYzMwNzI3MWItZTIzYi00YjkxLThhOWQtYmUwYjg4NWM0ZWI1XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg' }
    ],
    action: [
        { title: 'Extraction', img: 'https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/extraction-iemv069929-08-04-2020-14-14-10.jpg' },
        { title: 'John Wick', img: 'https://lionsgate.brightspotcdn.com/35/72/51b31d1045a2b4593871e545ebad/john-wick-movie-bg01-portrait.jpg' },
        { title: 'Mad Max Fury Road', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHPIIiUly3haHkVbpDQI7X8D5Y7W43RxIYrA&s' },
        { title: 'The Dark Knight', img: 'https://play-lh.googleusercontent.com/auIs5tjWlLYaFPGClZOJ7m5YVbnX6uBvz0X02r8TkwFKdzE53ww2MqWSS9gU0YNqoYwvpg' },
        { title: 'Avengers Endgame', img: 'https://i.pinimg.com/736x/67/91/b3/6791b331f134fa878b6c66e9b9d833c2.jpg' },
        { title: 'Mission Impossible', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSafalx_eWYqtyL60gkiDE61XXeEmyeuRBf8g&s' },
        { title: 'Die Hard', img: 'https://images.moviesanywhere.com/b853294bdcbd7f3f50caa4d4e88bdbb5/7356456a-0b47-4dc1-bd71-39fefae15adb.jpg?h=375&resize=fit&w=250' },
        { title: 'The Raid', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDJdvfdxUXzIA9Da3-KAyNK31xfpIoGAl3FA&s' },
        { title: 'Fast & Furious', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCGKGgylzH9vUbMhjMtgntiwm9_CKpdTCwjQ&s' },
        { title: 'Gladiator', img: 'https://www.moxiecinema.com/uploads/films/_cover/Gladiator-poster.jpg' }
    ],
    comedy: [
        { title: 'The Hangover', img: 'https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcSqX3C0w8FxlTPQb0qyNH5sm0Dfx4X9peP4Fyb0hJdYBBY1aUcdSfGcuM5OynPR4b9O4TiL2Jh6XuwKoTrFVlJ1HNBiuHET4f3o1kyF1XB1Vy8GIX0' },
        { title: 'Superbad', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyGwM_9q9Eu7WRneQ77a_rgB6Uxse4VWY_ww&s' },
        { title: 'Step Brothers', img: 'https://images.justwatch.com/poster/88698896/s718/step-brothers.jpg' },
        { title: 'Dumb and Dumber', img: 'https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcR3yXPYWTz3kTcX2sW8lfmvIPcxPrT4wRz5_iAmCF59WmGuaZjNAN9uhjmFIKTuWY9aqeI9YZgqljYyg6WWZZHBgj_ac5XxTVi-t5mPxBiGoElu9SI' },
        { title: 'Anchorman', img: 'https://upload.wikimedia.org/wikipedia/en/6/64/Movie_poster_Anchorman_The_Legend_of_Ron_Burgundy.jpg' },
        { title: 'Bridesmaids', img: 'https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcSSUchaEo_U2OzXhSwE6BROgzgNSx1swfS7W9OtQwCWrOfwMi11rcE9plrBUR9UiCNFqi81TvaMrL3UfEHr0LYsT9aJJ4CskghJOUKEMe1GXm5YigU' },
        { title: 'Wedding Crashers', img: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=400&h=600&fit=crop' },
        { title: '21 Jump Street', img: 'https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcQ8tTU1dvxF5zazwiPW4wuIGseFTbyzoGrqNikKrqZFAqWWjc4Y0GMYm2P6sKv-fiGId4el92I-phjdMh65bUTDeelWuigFly9gVe-jMJ7BNPuyxiE' },
        { title: 'Hot Fuzz', img: 'https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcTRJyKbo9RpUBtNcL3FvG5QfLWKyfk672YePQoTKsp6roybtJTJNb3w69h1xlGzDcB15vyb50Jr__ODni12bhA-E4gl_nGsdfAAGnyolapUIrU8RRw' },
        { title: 'The Big Lebowski', img: 'https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcSxrsV2F1tmsRoyX29uib9LI2Q-npFh7qlhMmoXl1Gs9Htkeel_RSuxfpJSE4rhwuoXYbYegP4WyNoEE7tl49rIi_wxzy2zQyowP6fQiF7PVPW7bsQ' }
    ],
    horror: [
        { title: 'The Conjuring', img: 'https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcT1UKRZJfw_88Q2itTIXajr3Ta8ezAkk2R3y1HURbZDrSIlC_trbyxoYm7K-TR9xP2fiORnDL1sjjPb7_XbpYTxgGV1jxE_cxFaVJWK09aFu9TOI78' },
        { title: 'A Quiet Place', img: 'https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcQGKFd0eE-eeRmxlnAB9ka3OARMF9smg1PpbfLi3Bo6teo4fTOvYGRMifDwq0Ni4_Y-qipfBNHmP7EmaQ1FjpJhpQvFcrFS2XJPoqjOEDvDU1cEawc' },
        { title: 'Get Out', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpby4DWXi4TVfYymplXpv8hzaBrqVmiO9yCw&s' },
        { title: 'Hereditary', img: 'https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcTlfcjPAhuTJyjzCTjaDOuJfB585qq29U9gLeYjFNwsqdvtK2N7lFSh6nJWZ8XASPDqWGS0NrIuKzCMOG1Ujk_gjB4sljcYqpFJ1cKEcJSAVISj7PQ' },
        { title: 'The Exorcist', img: 'https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcSHQVJRTHV0aw3mg4KzfY-eodsXMD28VPKALJlNsoxDyXZAXhRt3DSRKI8z5MqmsXX1kPbE4t_8gqCeZ4mO4KrpjtTZTBOZiEvbLa5UUjzFrqXUXtI' },
        { title: 'It', img: 'https://m.media-amazon.com/images/M/MV5BZGZmOTZjNzUtOTE4OS00OGM3LWJiNGEtZjk4Yzg2M2Q1YzYxXkEyXkFqcGc@._V1_.jpg' },
        { title: 'The Shining', img: 'https://upload.wikimedia.org/wikipedia/en/thumb/1/1d/The_Shining_%281980%29_U.K._release_poster_-_The_tide_of_terror_that_swept_America_IS_HERE.jpg/250px-The_Shining_%281980%29_U.K._release_poster_-_The_tide_of_terror_that_swept_America_IS_HERE.jpg' },
        { title: 'Sinister', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4pUE6c-MYZM9ce1OKcPgMDGKhJ1aAYacE7w&s' },
        { title: 'Insidious', img: 'https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcRPi_GuiBuYgGoJ4K7wxK-M9o1fgu1eWf500IIXrBvOZQpJ9ZvBoqlFVobmfK6cDHYUwsIFzYRJd9p8GbT_4EFh-AqGjOb8uoapBzkH5uOinibBcSc' },
        { title: 'Midsommar', img: 'https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcRdTByjYiTtb03woB89s3oTYethf8SAFXe3SH_4TTARv9VwQUIJhrVj2BT8vr-FWU5-budeb68wgT-LciuQKK3qHAYo3uQaLFcdk3biRX_Yr5oKrOY' }
    ],
    documentary: [
        { title: 'Our Planet', img: 'https://m.media-amazon.com/images/M/MV5BZDE1NzlkNWMtNzFiMC00ZTgxLTgyMmItOTU5OGI2NWQ4MDMxXkEyXkFqcGc@._V1_.jpg' },
        { title: 'The Social Dilemma', img: 'https://images.justwatch.com/poster/327159143/s718/the-social-dilemma.jpg' },
        { title: 'Making a Murderer', img: 'https://resizing.flixster.com/8x0p2L5pWVqicYoa1yKwjkq6raI=/ems.cHJkLWVtcy1hc3NldHMvdHZzZXJpZXMvUlRUVjE3NzM5NS53ZWJw' },
        { title: 'Tiger King', img: 'https://images.justwatch.com/poster/245502001/s718/tiger-king-murder-mayhem-and-madness.jpg' },
        { title: 'Planet Earth', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSX3dmQhYYeZDDtuVNEdkK-BUXOlA-0_641ow&s' },
        { title: 'Free Solo', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmtSOPF3f7z9HBvtS08kzq0MAOMIc4JeFo1g&s' },
        { title: 'The Last Dance', img: 'https://cdn.moviefone.com/image-assets/1226141/x4UT6SsBEnVzyeYm86WItNl4wGG.jpg?d=360x540&q=30' },
        { title: 'Wild Wild Country', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpgnD703YUzB5wcBce40GOMl_fSB4T1tgNJA&s' },
        { title: "Chef's Table", img: 'https://upload.wikimedia.org/wikipedia/en/1/11/Chef%27s_Table.jpg' },
        { title: 'Cosmos', img: 'https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcRv8E0RQDwyWwZ0jw0SsTycOOIIM2yf3e8iwqDw2senGKqY97x300mNVCrqQkY6S6IJht5J2vd63yD9L9A69tfUBrtxVuMgy2K_9sbaGksPRzOH1c8' }
    ]
};

// Users storage in memory
let users = {};
let currentUser = null;

// Check if user is already logged in on page load
window.addEventListener('DOMContentLoaded', function() {
    const savedUser = sessionStorage.getItem('streamhubUser');
    const savedUsers = sessionStorage.getItem('streamhubUsers');
    
    if (savedUsers) {
        users = JSON.parse(savedUsers);
    }
    
    if (savedUser) {
        currentUser = JSON.parse(savedUser);
        showMainSite();
    }
});

// Auth functions
function showSignup() {
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('signupForm').style.display = 'block';
}

function showLogin() {
    document.getElementById('signupForm').style.display = 'none';
    document.getElementById('loginForm').style.display = 'block';
}

function handleSignup(e) {
    e.preventDefault();
    const name = document.getElementById('signupName').value;
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;

    // Check if user already exists
    if (users[email]) {
        alert('Account already exists! Please sign in.');
        showLogin();
        return;
    }

    // Create new user
    users[email] = { name, password };
    
    // Save to session
    sessionStorage.setItem('streamhubUsers', JSON.stringify(users));
    
    alert('Account created successfully! Please sign in.');
    showLogin();
    
    // Clear signup form
    document.getElementById('signupName').value = '';
    document.getElementById('signupEmail').value = '';
    document.getElementById('signupPassword').value = '';
}

function handleLogin(e) {
    e.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    // Check credentials
    if (users[email] && users[email].password === password) {
        currentUser = { email, name: users[email].name };
        
        // Save user session - THIS KEEPS YOU LOGGED IN!
        sessionStorage.setItem('streamhubUser', JSON.stringify(currentUser));
        
        showMainSite();
    } else {
        // Show error message
        document.getElementById('loginError').style.display = 'block';
        setTimeout(() => {
            document.getElementById('loginError').style.display = 'none';
        }, 3000);
    }
}

function showMainSite() {
    document.getElementById('authPage').style.display = 'none';
    document.getElementById('mainSite').style.display = 'block';
    document.getElementById('userEmail').textContent = currentUser.email;
    populateMovies();
}

function handleLogout() {
    // Show logout overlay
    document.getElementById('logoutOverlay').style.display = 'flex';
    
    // Wait 2 seconds then logout
    setTimeout(() => {
        document.getElementById('logoutOverlay').style.display = 'none';
        document.getElementById('mainSite').style.display = 'none';
        document.getElementById('authPage').style.display = 'flex';
        
        // Clear session - ONLY NOW WE LOGOUT
        sessionStorage.removeItem('streamhubUser');
        currentUser = null;
        
        // Clear login form
        document.getElementById('loginEmail').value = '';
        document.getElementById('loginPassword').value = '';
    }, 2000);
}

// Populate movies
function populateMovies() {
    for (let category in movies) {
        const container = document.getElementById(category);
        container.innerHTML = '';
        
        movies[category].forEach(movie => {
            const poster = document.createElement('div');
            poster.className = 'movie-poster';
            poster.style.backgroundImage = `url('${movie.img}')`;
            poster.innerHTML = `<span>${movie.title}</span>`;
            poster.onclick = () => playMovie(movie.title);
            container.appendChild(poster);
        });
    }
}

// Play movie function
function playMovie(title) {
    alert(`Now Playing: ${title}\n\nEnjoy watching! 🎬`);
}

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Hero buttons
function playVideo() {
    alert('Now Playing: Stranger Things\n\nSeason 1 • Episode 1\n"Chapter One: The Vanishing of Will Byers"\n\nEnjoy watching! 🎬');
}

function showInfo() {
    alert('Stranger Things\n\n' +
          'Genre: Sci-Fi, Horror, Drama\n' +
          'Rating: TV-14\n' +
          'Seasons: 4\n' +
          'Creator: The Duffer Brothers\n\n' +
          'When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces and one strange little girl.');
}