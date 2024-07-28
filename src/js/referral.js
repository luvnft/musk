function shareReferral() {
    const shareText = `join me on playing Mustachio and receive 200 coins as your welcome bonus!\n` +
        `https://t.me/mustachio_bot/hoskinson?startapp=${window.referralCode}`;
    if (navigator.share) {
        navigator.share({
            title: 'Mustachio Referral',
            text: shareText,
            url: window.location.href // url of current page
        })
            .then(() => console.log('ref link was successfully shared!'))
            .catch((error) => console.error('Error sharing:', error))
    } else {
        alert(shareText);  // show text in alert as fallback
    }
}