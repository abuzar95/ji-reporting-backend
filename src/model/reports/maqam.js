const mongoose = require('mongoose');

const maqamReportModel = mongoose.Schema(
  {
    comments: {
      type: String,
      required: false,
    },
    month: {
      type: Date,
      required: true,
    },
    userId: {
      type: mongoose.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    maqamAreaId: {
      type: mongoose.Types.ObjectId,
      required: true,
      ref: 'Maqam',
    },
    maqamTanzeemId: {
      type: mongoose.Types.ObjectId,
      required: true,
      ref: 'MaqamTanzeem',
    },
    wiId: {
      type: mongoose.Types.ObjectId,
      required: true,
      ref: 'WorkerInfo',
    },
    maqamActivityId: {
      type: mongoose.Types.ObjectId,
      required: true,
      ref: 'MaqamActivities',
    },
    mentionedActivityId: {
      type: mongoose.Types.ObjectId,
      required: true,
      ref: 'MentionedActivities',
    },
    otherActivityId: {
      type: mongoose.Types.ObjectId,
      required: true,
      ref: 'OtherActivities',
    },
    tdId: {
      type: mongoose.Types.ObjectId,
      required: true,
      ref: 'ToseeDawat',
    },
    maqamDivisionlibId: {
      type: mongoose.Types.ObjectId,
      required: true,
      ref: 'MaqamDivisionLibrary',
    },
    paighamDigestId: {
      type: mongoose.Types.ObjectId,
      required: true,
      ref: 'PaighamDigest',
    },
    rsdId: {
      type: mongoose.Types.ObjectId,
      required: true,
      ref: 'RozShabBedari',
    },
  },
  { timestamps: true }
);

const MaqamReportModel = mongoose.model('MaqamReport', maqamReportModel);

module.exports = { MaqamReportModel };
