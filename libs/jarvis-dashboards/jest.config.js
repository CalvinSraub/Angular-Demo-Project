module.exports = {
  name: 'jarvis-dashboards',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/jarvis-dashboards',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
