// Challenge 4
const fetchUserProfile = async (userId) => {
    const delay = Math.random() * 4000
    await new Promise(resolve => setTimeout(resolve, delay))
    return { id: userId, name: 'Nauryzbek Berdi', email: 'berdinauryzbek@gmail.com' }
}

const fetchUserPosts = async (userId) => {
    const delay = Math.random() * 4000
    await new Promise(resolve => setTimeout(resolve, delay))
    return [
        { id: 1, title: 'First Post' },
        { id: 2, title: 'Second Post' }
    ]
}

const fetchUserFollowers = async (userId) => {
    const delay = Math.random() * 4000
    await new Promise(resolve => setTimeout(resolve, delay))
    return [
        { id: 101, name: 'User1' },
        { id: 102, name: 'User2' }
    ]
}

const with_timeout = (promise, timeout) => {
    return Promise.race([
        promise,
        new Promise((_, reject) => 
        setTimeout(() => reject(new Error('Request timed out')), timeout)
    )
    ])
}

const fetch_user_data = async (userId) => {
    try {
        const timeout = 3000

        const [profile, posts, followers] = await Promise.all([
        with_timeout(fetchUserProfile(userId), timeout),
        with_timeout(fetchUserPosts(userId), timeout),
        with_timeout(fetchUserFollowers(userId), timeout)
    ])

        return {
            profile,
            posts,
            followers
        }
    } catch (error) {
        throw new Error(`Failed to fetch user data: ${error.message}`)
    }
}

const get_user_data = async () => {
    try {
        const userData = await fetch_user_data(123)
        console.log('User data:', userData)
    } catch (error) {
        console.error('Error:', error.message)
    }
}

get_user_data()
