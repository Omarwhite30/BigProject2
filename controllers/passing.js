import Pass from "../models/teamPassing.js";

export const getPasses = async (req, res) => {
  try {
    const passes = await Pass.find();
    res.json (passes);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
};

export const getPass = async (req, res) => {
  try {
    const { id } = req.params;

    const pass = await Pass.findById(id);
    res.json (pass);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  
}};

export const createPass = async (req, res) => {
  try {
    const pass = new Pass(req.body);
    await pass.save();
    res.status(201).json (pass);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({error: error.message });
  }
};

export const updatePass = async (req, res) => {
  const { id } = req.params;
  const pass = await Pass.findByIdAndUpdate(id, req.body);
  res.status(200).json (pass);
};

export const deletePass = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Pass.findByIdAndDelete(id);

    if (deleted) {
      return res.status(200).send("pass Deleted!");
    }

    throw new Error( "pass not found");
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
};
