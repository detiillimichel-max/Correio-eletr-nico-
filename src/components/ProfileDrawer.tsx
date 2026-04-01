export const ProfileDrawer = ({ isOpen, onClose, userData }: any) => {
  return (
    <div id="glass-drawer" className={isOpen ? 'active' : ''}>
      <div className="drawer-handle" onClick={onClose}></div>
      
      <div className="profile-header">
        <div className="profile-pic-container">
          <img src={userData.photo || '/assets/avatar-padrao.png'} className="profile-pic" />
          <label htmlFor="upload-photo" className="add-photo-btn">
            <i class="fas fa-camera"></i>
          </label>
          <input type="file" id="upload-photo" style={{display: 'none'}} />
        </div>
        <h3>{userData.name}</h3>
      </div>

      <div className="user-info-section">
        <div className="info-item">
          <span className="info-label">Onde mora</span>
          <p>{userData.location || 'Não definido'}</p>
        </div>
        
        <div className="info-item">
          <span className="info-label">Quem sou eu (Recado)</span>
          <p>{userData.bio || 'Sem recados no momento...'}</p>
        </div>

        <div className="info-item" style={{borderLeft: '4px solid #ff9800'}}>
          <span className="info-label" style={{color: '#ff9800'}}>Meu Jogo Favorito</span>
          <p>{userData.game || 'Nostalgia pura!'}</p>
        </div>
      </div>
    </div>
  );
};
