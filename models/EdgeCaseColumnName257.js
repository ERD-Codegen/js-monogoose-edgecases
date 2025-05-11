const mongoose = require('../config/db');

const edgeCaseSchema = new mongoose.Schema({
    name: { type: String, required: true },
    'tbl_real_time_sensory_data_ingestion_pipeline_for_autonomous_vehicle_fleet_monitoring_with_edge_computing_federated_learning_secure_over_the_air_updates_and_hybrid_cloud_failover_support_via_continuous_delivery_and_integrity_verification_checksum_algorithm_version_two_2025_05_11': { type: String, required: true },
    email: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});

const collection = 'EdgeCaseColumn256';
module.exports = mongoose.model('EdgeCase256', edgeCaseSchema, collection);
