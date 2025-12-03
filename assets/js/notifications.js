function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    
    const icon = type === 'success' ? 'check' : 
                 type === 'error' ? 'times' : 
                 type === 'warning' ? 'exclamation' : 'info';
    
    notification.innerHTML = `<i class="fas fa-${icon}"></i> ${message}`;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        if (notification.parentNode) {
            notification.parentNode.removeChild(notification);
        }
    }, 3000);
}
