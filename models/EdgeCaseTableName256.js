const mongoose = require('../config/db');

const edgeCaseSchema = new mongoose.Schema({
    name: { type: String, required: true },
    type: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});

const collection = 'tbl_genomic_variant_annotation_repository_with_privacy_preserving_homomorphic_encryption_backed_indexing_for_population_scale_cohort_analysis_and_clinical_trial_matching_across_multi_modal_omics_profiles_including_single_cell_rna_seq';
module.exports = mongoose.model('EdgeCase256', edgeCaseSchema, collection);
