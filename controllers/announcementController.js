const Announcement = require('../model/Announcement');

exports.createAnnouncements =  (req, res, next) => {
  const newAnnouncement = new Announcement(req.body);
  newAnnouncement.save()
    .then((announcement) => {
      res.json(announcement);
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
};

exports.getAllAnnouncements = (req, res, next) => {
  Announcement.find()
    .then((announcements) => {
      res.json(announcements);
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
};

exports.getAnnouncementById =  (req, res, next) => {
  Announcement.findById(req.params.id)
    .then((announcement) => {
      if (announcement) {
        res.json(announcement);
      } else {
        res.status(404).json({ error: 'not found' });
      }
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
};

exports.updateAnnouncement =  (req, res, next) => {
  Announcement.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((announcement) => {
      if (announcement) {
        res.json(announcement);
      } else {
        res.status(404).json({ error: 'not found' });
      }
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
};

exports.deleteAnnouncement =  (req, res, next) => {
  Announcement.findByIdAndRemove(req.params.id)
    .then((announcement) => {
      if (announcement) {
        res.json(announcement);
      } else {
        res.status(404).json({ error: 'not found' });
      }
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
};