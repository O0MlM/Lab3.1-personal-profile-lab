import React, { useState } from 'react';
import './ProfileCard.css';

function ProfileCard({ profile }) {
    const [isDarkMode, setIsDarkMode] = useState(false);
    
    const [viewCount, setViewCount] = useState(0);
    const [favoriteHobbies, setFavoriteHobbies] = useState([]);
    const [showContactForm, setShowContactForm] = useState(false);
    const [contactMessage, setContactMessage] = useState('');

    const getInitials = (name) => {
        return name
            .split(' ')
            .map((n) => n[0])
            .join('')
            .toUpperCase();
    };

    const platformIcon = (platform) => {
        const p = (platform || '').toLowerCase();
        if (p.includes('github')) return '🐙';
        if (p.includes('instagram')) return '📸';
        if (p.includes('discord')) return '💬';
        return '🌐';
    };

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
    };

    const handleCardClick = () => {
        setViewCount(viewCount + 1);
    };

    const toggleFavoriteHobby = (hobby) => {
        if (favoriteHobbies.includes(hobby)) {
            setFavoriteHobbies(favoriteHobbies.filter(h => h !== hobby));
        } else {
            setFavoriteHobbies([...favoriteHobbies, hobby]);
        }
    };

    const handleContactClick = () => {
        setShowContactForm(!showContactForm);
    };

    const handleSubmitMessage = (e) => {
        e.preventDefault();
        if (contactMessage.trim()) {
            alert(`ข้อความของคุณถึง ${profile.name}:\n"${contactMessage}"\n\nส่งไปที่: ${profile.email}`);
            setContactMessage('');
            setShowContactForm(false);
        }
    };

    const handleSkillClick = (skill) => {
        alert(`${profile.name} มีความเชี่ยวชาญใน ${skill}!`);
    };

    const achievements = [];
    if (profile.gpa >= 3.5) achievements.push({ icon: '🌟', text: 'เกียรตินิยม' });
    if (profile.skills.length >= 5) achievements.push({ icon: '💪', text: 'Multi-skilled' });
    if (profile.hobbies.length >= 5) achievements.push({ icon: '🎯', text: 'Well-rounded' });
    if (profile.gpa >= 3.8) achievements.push({ icon: '🏆', text: 'Top Performer' });

    // Dynamic className based on theme
    const cardClassName = `profile-card ${isDarkMode ? 'dark-mode' : ''}`;

    return (
        <div className={cardClassName} onClick={handleCardClick}>
            <div className="view-counter">
                👁️ Views: {viewCount}
            </div>

            <button 
                className="theme-toggle" 
                onClick={(e) => {
                    e.stopPropagation();
                    toggleTheme();
                }}
            >
                {isDarkMode ? '☀️' : '🌙'}
            </button>

            <div className="profile-header">
                <div className="profile-avatar">
                    {getInitials(profile.name)}
                </div>
                <h1 className="profile-name">{profile.name}</h1>
                <div className="student-id">{profile.studentId}</div>
            </div>

            <div className="profile-info">
                <div className="info-item">
                    <div className="info-label">สาขา</div>
                    <div className="info-value">{profile.major}</div>
                </div>
                <div className="info-item">
                    <div className="info-label">ชั้นปี</div>
                    <div className="info-value">{profile.year}</div>
                </div>
                <div className="info-item">
                    <div className="info-label">อายุ</div>
                    <div className="info-value">{profile.age} ปี</div>
                </div>
                <div className="info-item">
                    <div className="info-label">เกรด</div>
                    <div className="info-value">
                        {profile.gpa.toFixed(2)}
                        {profile.gpa >= 3.5 && ' 🌟'}
                    </div>
                </div>
            </div>

            <div className="profile-section">
                <h3>🎯 งานอดิเรก</h3>
                <ul className="hobbies-list">
                    {profile.hobbies.map((hobby, index) => (
                        <li 
                            key={index} 
                            className={`hobby-item ${favoriteHobbies.includes(hobby) ? 'favorite' : ''}`}
                            onClick={(e) => {
                                e.stopPropagation();
                                toggleFavoriteHobby(hobby);
                            }}
                        >
                            {hobby} {favoriteHobbies.includes(hobby) && '💖'}
                        </li>
                    ))}
                </ul>
            </div>

            <div className="profile-section">
                <h3>💻 ทักษะ</h3>
                <div className="skills">
                    {profile.skills.map((skill, index) => (
                        <div 
                            key={index} 
                            className="skill-tag"
                            onClick={(e) => {
                                e.stopPropagation();
                                handleSkillClick(skill);
                            }}
                        >
                            {skill}
                        </div>
                    ))}
                </div>
            </div>

            {achievements.length > 0 && (
                <div className="profile-section">
                    <h3>🏆 Achievements</h3>
                    <div className="achievements">
                        {achievements.map((achievement, idx) => (
                            <span key={idx} className="achievement-badge">
                                {achievement.icon} {achievement.text}
                            </span>
                        ))}
                    </div>
                </div>
            )}

            {profile.socialLinks && profile.socialLinks.length > 0 && (
                <div className="profile-section">
                    <h3>🌐 Social Media</h3>
                    <div className="social-links">
                        {profile.socialLinks.map((link, idx) => (
                            <a
                                key={idx}
                                href={link.url}
                                className="social-link"
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <span className="social-icon">{platformIcon(link.platform)}</span>
                                <span className="social-text">{link.platform}</span>
                            </a>
                        ))}
                    </div>
                </div>
            )}

            <button 
                className="contact-button" 
                onClick={(e) => {
                    e.stopPropagation();
                    handleContactClick();
                }}
            >
                {showContactForm ? '❌ ปิด' : '📧 ติดต่อ'} {profile.name}
            </button>

            {showContactForm && (
                <div className="contact-form" onClick={(e) => e.stopPropagation()}>
                    <h4>✉️ ส่งข้อความถึง {profile.name}</h4>
                    <form onSubmit={handleSubmitMessage}>
                        <textarea
                            className="contact-textarea"
                            placeholder="พิมพ์ข้อความของคุณที่นี่..."
                            value={contactMessage}
                            onChange={(e) => setContactMessage(e.target.value)}
                            rows={4}
                        />
                        <button type="submit" className="send-button">
                            ส่งข้อความ 📤
                        </button>
                    </form>
                </div>
            )}
        </div>
    );
}

export default ProfileCard;