const apiPath = 'https://dev.backend.kollabium.com/api/v1/'
const apiToken = localStorage.getItem(btoa('token'))
export const apiHeader = {'Authorization': 'Bearer ' + atob(apiToken)}

export default {
    userProf: apiPath + 'user_profile',    
    userInfo: apiPath + 'userInformation',    
    auth: apiPath + 'auth/user_login',    
    register: apiPath + 'auth/user_register_by_email',    
    me: apiPath + 'auth/me',    
    deleteMe: apiPath + 'users/delete/me',
    getRefCode: apiPath + 'getReferralCode',
    referrals: apiPath + 'referrals',
    posts: apiPath + 'posts',    
    news: apiPath + 'news',    
    newsCategories: apiPath + 'category_news',    
    orders: apiPath + 'orders',    
    makeOrder: apiPath + 'MakeOrder',    
    allcomments: apiPath + 'allcomments',    
    comments: apiPath + 'comments',    
    companies: apiPath + 'companies',    
    companyInformation: apiPath + 'companyInformation',    
    companyInformationHeaders: apiPath + 'companyInformationHeaders',    
    companyRoles: apiPath + 'companyRoles',    
    favorites: apiPath + 'favorites',    
    myFavorites: apiPath + 'myFavorites',    
    follows: apiPath + 'follows',    
    myFollows: apiPath + 'myFollows',    
    languages: apiPath + 'languages',    
    likes: apiPath + 'likes',    
    myLikes: apiPath + 'myLikes',    
    plans: apiPath + 'plans',    
    planPrices: apiPath + 'planPrices',    
    projectInformation: apiPath + 'projectInformation',    
    rates: apiPath + 'rates',    
    supports: apiPath + 'supports',    
    mySupports: apiPath + 'mySupports',    
    tags: apiPath + 'tags',    
    transactions: apiPath + 'transactions',
    withdraw: apiPath + 'withdraw',
    uploadFile: apiPath + 'upload-file',
    settings: apiPath + 'settings/profile',
}