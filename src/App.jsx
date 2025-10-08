import React from 'react';
import ProfileCard from './ProfileCard';

function App() {
    const myProfile = {
        name: "Sarisah Tawanwarasak",
        studentId: "67543210005-4",
        major: "วิศวกรรมซอฟต์แวร์",
        year: 2,
        age: 20,
        gpa: 3.54,
        email: "sarisah_ta67@live.rmutl.ac.th",
        hobbies: [
            "เขียนโค้ด",
            "เล่นเกม",
            "ดูหนัง",
            "ฟังเพลง",
            "อ่านหนังสือ"
        ],
        skills: [
            "Python",
            "Git",
            "HTML/CSS",
            "PHP",
            "JavaScript",
            "CSS",
            "Node.js",
            "React.js",
            "Java"
        ],
        socialLinks: [
            { platform: "GitHub", url: "https://github.com/O0MlM" },
            { platform: "Instagram", url: "https://www.instagram.com/0_0omim" },
            { platform: "Discord", url: "https://discord.com/users/O0MlM#8250" }
        ]
    };

    return (
        <div style={{ 
            minHeight: '100vh', 
            background: 'linear-gradient(45deg, #f0f2f5 0%, #e8eaf6 100%)',
            padding: '20px'
        }}>
            <div style={{ textAlign: 'center', marginBottom: '30px' }}>
                <h1 style={{ 
                    color: '#333', 
                    fontSize: '32px',
                    margin: '20px 0'
                }}>
                    🎓 Personal Profile Card
                </h1>
                <p style={{ color: '#666', fontSize: '16px' }}>
                    Lab 3.1 - ทำความรู้จักกับ React.js และ JSX
                </p>
            </div>
            
            <ProfileCard profile={myProfile} />
        </div>
    );
}

export default App;