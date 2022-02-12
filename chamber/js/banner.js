const bannerDate =new Date()
const bannerDay = bannerDate.getDay();

if (bannerDay == 1 || bannerDay == 2) {
    document.getElementById('meetingbanner').style.display = "block";
} else{
    document.getElementById('meetingbanner').style.display = "none";
}